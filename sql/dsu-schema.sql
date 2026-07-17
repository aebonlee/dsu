-- ============================================================
--  동신대학교 교수자 AI 역량 강화 연수 — Supabase 스키마
--  공용 프로젝트(hcmgdztsgjvzcyxyayaj) 내 dsu_ 접두사 테이블
--  Auth(가입/로그인)는 공용 auth.users + user_profiles 사용
--  (구글 이메일 / 카카오 OAuth)
--  실행: Supabase SQL Editor
--  ※ 구독/토큰 관련 테이블은 sql/subscription-schema.sql 참고
-- ============================================================

-- ─────────────────────────────────────────────
-- 1. 주문 / 결제 (PortOne 아임포트)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dsu_orders (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number    TEXT UNIQUE NOT NULL,
  user_id         UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email      TEXT,
  user_name       TEXT,
  user_phone      TEXT,
  total_amount    INTEGER NOT NULL DEFAULT 0,
  payment_method  TEXT,
  payment_status  TEXT NOT NULL DEFAULT 'pending',   -- pending | paid | cancelled
  portone_payment_id TEXT,
  paid_at         TIMESTAMPTZ,
  cancelled_at    TIMESTAMPTZ,
  cancel_reason   TEXT,
  created_at      TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_dsu_orders_user ON dsu_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_dsu_orders_number ON dsu_orders(order_number);

CREATE TABLE IF NOT EXISTS dsu_order_items (
  id            BIGSERIAL PRIMARY KEY,
  order_id      UUID NOT NULL REFERENCES dsu_orders(id) ON DELETE CASCADE,
  product_title TEXT NOT NULL,
  quantity      INTEGER NOT NULL DEFAULT 1,
  unit_price    INTEGER NOT NULL DEFAULT 0,
  subtotal      INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_dsu_order_items_order ON dsu_order_items(order_id);

-- ─────────────────────────────────────────────
-- 2. 게시판 (과정별 커뮤니티)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dsu_posts (
  id           BIGSERIAL PRIMARY KEY,
  author_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name  TEXT,
  board        TEXT NOT NULL,           -- vod | day1 | day2 | day3
  category     TEXT NOT NULL DEFAULT 'free', -- question | resource | free | notice
  title        TEXT NOT NULL,
  content      TEXT,
  view_count   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_dsu_posts_board ON dsu_posts(board);

CREATE TABLE IF NOT EXISTS dsu_comments (
  id           BIGSERIAL PRIMARY KEY,
  post_id      BIGINT NOT NULL REFERENCES dsu_posts(id) ON DELETE CASCADE,
  author_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name  TEXT,
  body         TEXT NOT NULL,
  created_at   TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_dsu_comments_post ON dsu_comments(post_id);

-- 조회수 증가 RPC (search_path 고정 — 공용 프로젝트 보안)
CREATE OR REPLACE FUNCTION increment_dsu_view_count(post_id BIGINT)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE dsu_posts SET view_count = view_count + 1 WHERE id = post_id;
$$;

-- ─────────────────────────────────────────────
-- 3. 프롬프트 실습 점수
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dsu_practice_scores (
  id           BIGSERIAL PRIMARY KEY,
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name    TEXT,
  quiz_score   INTEGER DEFAULT 0,
  eval_score   INTEGER DEFAULT 0,
  write_score  INTEGER DEFAULT 0,
  total_score  INTEGER DEFAULT 0,
  grade        TEXT,
  detail       JSONB,
  created_at   TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_dsu_practice_user ON dsu_practice_scores(user_id);

-- ─────────────────────────────────────────────
-- 4. AI 교수설계 도구 산출물 (강의계획서·루브릭·과제·피드백·평가)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dsu_syllabi (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT, payload JSONB, created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE IF NOT EXISTS dsu_rubrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT, payload JSONB, created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE IF NOT EXISTS dsu_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT, payload JSONB, created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE IF NOT EXISTS dsu_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT, payload JSONB, created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE IF NOT EXISTS dsu_evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT, payload JSONB, created_at TIMESTAMPTZ DEFAULT now()
);

-- ─────────────────────────────────────────────
-- 5. RLS (Row Level Security)
-- ─────────────────────────────────────────────
ALTER TABLE dsu_orders          ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_order_items     ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_posts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_comments        ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_practice_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_syllabi         ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_rubrics         ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_assignments     ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_feedback        ENABLE ROW LEVEL SECURITY;
ALTER TABLE dsu_evaluations     ENABLE ROW LEVEL SECURITY;

-- 주문: 본인 것만 (결제 플로우는 anon도 insert 허용)
DROP POLICY IF EXISTS dsu_orders_insert ON dsu_orders;
CREATE POLICY dsu_orders_insert ON dsu_orders FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS dsu_orders_select ON dsu_orders;
CREATE POLICY dsu_orders_select ON dsu_orders FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
DROP POLICY IF EXISTS dsu_orders_update ON dsu_orders;
CREATE POLICY dsu_orders_update ON dsu_orders FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS dsu_order_items_all ON dsu_order_items;
CREATE POLICY dsu_order_items_all ON dsu_order_items FOR ALL USING (true) WITH CHECK (true);

-- 게시판: 누구나 읽기, 로그인 사용자만 작성, 작성자 본인만 삭제
DROP POLICY IF EXISTS dsu_posts_select ON dsu_posts;
CREATE POLICY dsu_posts_select ON dsu_posts FOR SELECT USING (true);
DROP POLICY IF EXISTS dsu_posts_insert ON dsu_posts;
CREATE POLICY dsu_posts_insert ON dsu_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
DROP POLICY IF EXISTS dsu_posts_delete ON dsu_posts;
CREATE POLICY dsu_posts_delete ON dsu_posts FOR DELETE USING (auth.uid() = author_id);

DROP POLICY IF EXISTS dsu_comments_select ON dsu_comments;
CREATE POLICY dsu_comments_select ON dsu_comments FOR SELECT USING (true);
DROP POLICY IF EXISTS dsu_comments_insert ON dsu_comments;
CREATE POLICY dsu_comments_insert ON dsu_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
DROP POLICY IF EXISTS dsu_comments_delete ON dsu_comments;
CREATE POLICY dsu_comments_delete ON dsu_comments FOR DELETE USING (auth.uid() = author_id);

-- 실습 점수 / AI 산출물: 본인 데이터만
DROP POLICY IF EXISTS dsu_practice_own ON dsu_practice_scores;
CREATE POLICY dsu_practice_own ON dsu_practice_scores FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS dsu_syllabi_own ON dsu_syllabi;
CREATE POLICY dsu_syllabi_own ON dsu_syllabi FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS dsu_rubrics_own ON dsu_rubrics;
CREATE POLICY dsu_rubrics_own ON dsu_rubrics FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS dsu_assignments_own ON dsu_assignments;
CREATE POLICY dsu_assignments_own ON dsu_assignments FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS dsu_feedback_own ON dsu_feedback;
CREATE POLICY dsu_feedback_own ON dsu_feedback FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS dsu_evaluations_own ON dsu_evaluations;
CREATE POLICY dsu_evaluations_own ON dsu_evaluations FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ============================================================
--  ▶ 인증(가입/로그인) 설정 — Supabase Dashboard에서 1회 설정
--    1) Authentication > Providers > Google : 사용 설정
--    2) Authentication > Providers > Kakao  : 사용 설정
--       (scopes: profile_nickname, profile_image, account_email)
--    3) Authentication > URL Configuration > Redirect URLs 에
--       https://dsu.dreamitbiz.com  추가 (OAuth 콜백 허용)
--    ※ 공용 auth.users 트리거가 있다면 search_path=public 고정 필수
--      (사이트별 핸들러 search_path 누락 시 전체 가입 마비 사례 있음)
-- ============================================================
