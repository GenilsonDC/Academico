run:
	@uvicorn workout_api.main:app --reload

.PHONY: create-migrations upgrade

create-migrations:
	@alembic upgrade head
	@alembic revision --autogenerate -m "$(d)"
	@alembic upgrade head

upgrade:
	@alembic upgrade head
