class BaseExpeptionMessage(Exception):
    message_error: str = "🔴 Internal Server Error"

    def __init__(self, message_error: str | None = None) -> None:
        if message_error:
            self.message_error = message_error


class NotFoundMessage(BaseExpeptionMessage):
    message_error = "🔴 Not Found"
