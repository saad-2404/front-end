from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

import os


app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3030",
    "*"  # Add other origins if necessary
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Specifies the origins that can access the API
    allow_credentials=True,
    allow_methods=["GET"],  # Allows only GET requests
    allow_headers=["*"],    # Allows all headers
)

@app.get('/test')
def test():
    return [
        {
            'name': 'Alejandro Bashirian',
            'company': 'Dicki Group',
            'isverified': 'Yes',
            'status': 'Banned',
        },
        {
            'name': 'Andrea Fritsch',
            'company': 'Sauer',
            'isverified': 'Yes',
            'status': 'Banned',
        },
        {
            'name': 'Alejandro',
            'company': 'Dicki',
            'isverified': 'Yes',
            'status': 'Banned',
        },
        {
            'name': 'Carlton Wolff',
            'company': 'Group',
            'isverified': 'Yes',
            'status': 'Banned',
        }
    ]

@app.get("/audio")
async def get_all_audio():
    audio_files_path = "./audio_files"
    audio_data_list = []
    for filename in os.listdir(audio_files_path):
        if filename.endswith(".mp3"):
            file_path = os.path.join(audio_files_path, filename)
            with open(file_path, mode="rb") as audio_file:
                audio_data = audio_file.read()
                # audio_data = audio_data.rstrip("\n").decode("utf-16")
                # audio_data = audio_data.split("\r\n")
                audio_data_list.append(audio_data)
    return audio_data_list

