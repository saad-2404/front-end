from fastapi import FastAPI, File, Response

app = FastAPI()

@app.get("/audio")
async def get_audio():
    with open("\\test.mp3", mode="rb") as audio_file:
        audio_data = audio_file.read()
    return Response(content=audio_data, media_type="audio/mpeg")
