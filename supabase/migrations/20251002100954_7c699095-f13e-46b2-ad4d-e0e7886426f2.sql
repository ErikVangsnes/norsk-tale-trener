-- Create needed tables for favorites, ingredients, and ratings
-- 1) user_favorites
create table if not exists public.user_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  recipe_id integer not null,
  created_at timestamp with time zone not null default now(),
  unique (user_id, recipe_id)
);

-- Enable RLS
alter table public.user_favorites enable row level security;

-- Drop policies if they exist, then recreate
drop policy if exists "Users can view their own favorites" on public.user_favorites;
drop policy if exists "Users can insert their own favorites" on public.user_favorites;
drop policy if exists "Users can delete their own favorites" on public.user_favorites;
drop policy if exists "Users can update their own favorites" on public.user_favorites;

-- Policies for user_favorites (owner-only access)
create policy "Users can view their own favorites"
  on public.user_favorites
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert their own favorites"
  on public.user_favorites
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can delete their own favorites"
  on public.user_favorites
  for delete
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can update their own favorites"
  on public.user_favorites
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_user_favorites_user_id on public.user_favorites(user_id);
create index if not exists idx_user_favorites_recipe_id on public.user_favorites(recipe_id);


-- 2) user_ingredients
create table if not exists public.user_ingredients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  ingredient text not null,
  created_at timestamp with time zone not null default now(),
  unique (user_id, ingredient)
);

alter table public.user_ingredients enable row level security;

drop policy if exists "Users can view their own ingredients" on public.user_ingredients;
drop policy if exists "Users can upsert their own ingredients (insert)" on public.user_ingredients;
drop policy if exists "Users can update their own ingredients" on public.user_ingredients;
drop policy if exists "Users can delete their own ingredients" on public.user_ingredients;

create policy "Users can view their own ingredients"
  on public.user_ingredients
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can upsert their own ingredients (insert)"
  on public.user_ingredients
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own ingredients"
  on public.user_ingredients
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own ingredients"
  on public.user_ingredients
  for delete
  to authenticated
  using (auth.uid() = user_id);

create index if not exists idx_user_ingredients_user_id on public.user_ingredients(user_id);
create index if not exists idx_user_ingredients_ingredient on public.user_ingredients(ingredient);


-- 3) recipe_ratings
create table if not exists public.recipe_ratings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  recipe_id integer not null,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  unique (user_id, recipe_id)
);

alter table public.recipe_ratings enable row level security;

drop policy if exists "Anyone can view ratings" on public.recipe_ratings;
drop policy if exists "Users can insert their own ratings" on public.recipe_ratings;
drop policy if exists "Users can update their own ratings" on public.recipe_ratings;
drop policy if exists "Users can delete their own ratings" on public.recipe_ratings;

-- Ratings should be readable by everyone (even logged out users)
create policy "Anyone can view ratings"
  on public.recipe_ratings
  for select
  to anon, authenticated
  using (true);

-- Only owners can insert/update/delete their own rating rows
create policy "Users can insert their own ratings"
  on public.recipe_ratings
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own ratings"
  on public.recipe_ratings
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own ratings"
  on public.recipe_ratings
  for delete
  to authenticated
  using (auth.uid() = user_id);

create index if not exists idx_recipe_ratings_recipe_id on public.recipe_ratings(recipe_id);
create index if not exists idx_recipe_ratings_user_id on public.recipe_ratings(user_id);

-- Timestamp trigger for updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

drop trigger if exists update_recipe_ratings_updated_at on public.recipe_ratings;
create trigger update_recipe_ratings_updated_at
before update on public.recipe_ratings
for each row execute function public.update_updated_at_column();