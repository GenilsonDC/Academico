import asyncio
import asyncpg

async def test_connection():
    conect = await  asyncpg.connect(
        user="postgres",
        password="00000",
        database="workout",
        host="localhost",
    )
    print("🟢 Conectado com sucesso ao Workout")
    await conect.close()
asyncio.run(test_connection())
