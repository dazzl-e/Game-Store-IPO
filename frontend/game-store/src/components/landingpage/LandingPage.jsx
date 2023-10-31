import React from 'react'
import GameCard from '../commons/gamecard/GameCard'

const dummyGames = 
[
    {name: 'Zelda' ,        desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Emperator Rome' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Assassin\'s Creed' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Call Of Duty' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Red Dead Redemption' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'The Witcher' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'GTA' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Mount & Blade' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Resident Evil' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Dota' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Civilization' , desription: 'blah blah blah' , price: '$50.00'},
    {name: 'Counter-Strike' , desription: 'blah blah blah' , price: '$50.00'},
]

export default function LandingPage() {
  return (
    <div className='grid mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10'>
    {dummyGames.map((games, index) => 
        (
            <div className='mx-auto'>
            <GameCard key={index} name={games.name} description={games.desription} price={games.price}/>
            </div>
        ))}
        
    </div>
  )
}
