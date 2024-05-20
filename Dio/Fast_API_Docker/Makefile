run:
	@uvicorn workout_api.main:app --reload

.PHONY: create-migrations upgrade

create-migrations:
	@PYTHONPATH=$(pwd) alembic revision --autogenerate -m "$(d)"
	@PYTHONPATH=$(pwd) alembic upgrade head

upgrade:
	@PYTHONPATH=$(pwd) alembic upgrade head
