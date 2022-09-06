import axios from "axios"
import { useEffect, useState } from "react"

import Spinner from './Spinner'

export default function CrudApi () {
    const originalForm = {
        artist: '',
        title: '',
        year: '2022'
    }

    const [songs, setSongs] = useState([])
    const [formInput, setFormInput] = useState({...originalForm})
    const [isLoading,  setIsLoading] = useState((true))

    async function getSongList () {
        try{
            setIsLoading(true)
            const res = await axios.get('http://localhost:3023/songs')
            
            console.log(res.data)
            setSongs(res.data)
        } catch (err) {
            console.log(err)
            alert('Ada masalah yang terjadi. Mohon mencoba kembali')
        } finally {
            setIsLoading(false)
        }
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
        setIsLoading(true)
        axios
            .post('http://localhost:3023/songs', formInput)
            .then(() => {
                getSongList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah yang terjadi. Mohon mencoba kembali')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function updateSongs () {
        setIsLoading(true)
        axios
            .put('http://localhost:3023/songs/' + formInput.id, formInput)
            .then(() => {
                getSongList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah yang terjadi. Mohon mencoba kembali')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function deleteSongs (songId) {
        setIsLoading(true)
        axios
            .delete('http://localhost:3023/songs/' + songId)
            .then(() => {
                getSongList()
            })
            .catch(err => {
                console.log(err)
                alert('Ada masalah yang terjadi. Mohon mencoba kembali')
            })
            .finally(() => {
                setIsLoading(false)
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

    if (isLoading) return <Spinner />

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