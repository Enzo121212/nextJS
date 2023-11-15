import React, { Suspense } from 'react'
import List from './list'


const photo = () => {
  return (
    <div>
        <h1>Liste des photos</h1>
        <Suspense fallback={<p>Miandrasa ooh.........</p>}>
            <List/>
        </Suspense>
    </div>
  )
}

export default photo

