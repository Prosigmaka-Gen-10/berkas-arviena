import axios from "axios"
import { useEffect, useState } from "react"

export default function CrudApi () {
    const originalForm = {
        artist: '',
        title: '',
        year: '2022'
    }

    const [songs, setSongs] = useState([])
    const [formInput, setFormInput] = useState({...originalForm})

    function getSongList () {
        axios.get('http://localhost:3023/songs')
            .then((res) => {
                setSongs(res.data)
            })
    }

    function handleSubmit (event) {
        event.preventDefault()

        if (formInput.id) {
            updateSongs()
        }
        else{
            inputNewSongs() 
        }
        

        setFormInput({...originalForm})
    }

    function inputNewSongs () {
        axios.post('http://localhost:3023/songs', formInput)
            .then(() => {
                getSongList()
            })
    }

    function updateSongs () {
        axios.put('http://localhost:3023/songs/' + formInput.id, formInput)
            .then(() => {
                getSongList()
            })
    }

    function deleteSongs (songId) {
        axios.delete('http://localhost:3023/songs/' + songId)
            .then(() => {
                getSongList()
            })
    }

    function handleInput (event, propName) {
        const currentFormInput = {...formInput}
        currentFormInput[propName] = event.target.value
        setFormInput(currentFormInput)
    }

    function prepareUpdate (song) {
        setFormInput({...song})
    }

    useEffect(() => {
        getSongList()
    }, [])

    return <>
        <form onSubmit={event => handleSubmit(event)}>
            <h2>Pendaftaran Lagu Baru:</h2>

            <label>
                Artist: 
                <input type="text" value={formInput.artist}
                    onChange={event => handleInput(event, 'artist' )} />
            </label>

            <br /><br /> 

            <label>
                Title:
                <input type="text" value={formInput.title}
                    onChange={event => handleInput(event, 'title' )} />
            </label>

            <br /><br />

            <label>
                Year:
                <input type="number" value={formInput.year}
                    onChange={event => handleInput(event, 'year' )} />
            </label>

            <br /><br />

            <button>
                Register
            </button>
        </form>

        <br /><hr /><br />

        <h2>Daftar Lagu:</h2>
		<ul>
			{songs.map(song =>
				<li key={song.id}>
					{song.artist} - 
                    {song.title} - 
                    {song.year}

                    &nbsp;&nbsp;
                    <button onClick={() => prepareUpdate(song)}>
                        Update
                    </button>

                    &nbsp;&nbsp;
                    <button onClick={() => deleteSongs(song.id)}>
                        Delete
                    </button>
				</li>
			)}
		</ul>

    </>


}