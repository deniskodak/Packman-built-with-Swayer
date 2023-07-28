import { GHOSTS } from '../constants/game.js'

export const styleVariables = {
    primary: '#f1bb00',
    primaryAccent: '#cea000',
    secondary: '#2c2e4e',
    secondaryAccent: '#24293c',
    modalBackdrop: '#2d2c2c94',
    boardBackground: '#2d2c2c',
    transition: '250ms cubic-bezier(.17,.67,.83,.67)',
}

export const commonControlStyles = {
    outline: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: '2px solid',
    fontWeight: '700',
    cursor: 'pointer',
    transition: styleVariables.transition,
    fontSize: '1rem',
}

export const ghostsBackground = {
    [GHOSTS.blinky]:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a80c8979-22d6-49c7-bca4-97613a4a9237/d5s8ix5-5880cd35-a088-4180-a04f-e956029fb06d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MGM4OTc5LTIyZDYtNDljNy1iY2E0LTk3NjEzYTRhOTIzN1wvZDVzOGl4NS01ODgwY2QzNS1hMDg4LTQxODAtYTA0Zi1lOTU2MDI5ZmIwNmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kUktnugjMrKWpD_y-9d739NvnAsCnK41rygbE_zAMn8)',
    [GHOSTS.pinky]:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a80c8979-22d6-49c7-bca4-97613a4a9237/d5saavl-90d1553d-ed93-4eba-a839-f166189e93a5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MGM4OTc5LTIyZDYtNDljNy1iY2E0LTk3NjEzYTRhOTIzN1wvZDVzYWF2bC05MGQxNTUzZC1lZDkzLTRlYmEtYTgzOS1mMTY2MTg5ZTkzYTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.colCYD1b399TLRaeBi02Sj0ssSYX3mYA3UdXbyc2yEA)',
    [GHOSTS.inky]:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a80c8979-22d6-49c7-bca4-97613a4a9237/d5sab38-95b905e1-2098-4e1f-8c19-141528b16e77.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MGM4OTc5LTIyZDYtNDljNy1iY2E0LTk3NjEzYTRhOTIzN1wvZDVzYWIzOC05NWI5MDVlMS0yMDk4LTRlMWYtOGMxOS0xNDE1MjhiMTZlNzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ChpwgI5LV2i68bmisy4m7nrCb-uHU1hnf2-TFIRZnOE)',
    [GHOSTS.clyde]:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a80c8979-22d6-49c7-bca4-97613a4a9237/d5sab7r-10689df3-292d-461d-bd70-a7d721baf9ec.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MGM4OTc5LTIyZDYtNDljNy1iY2E0LTk3NjEzYTRhOTIzN1wvZDVzYWI3ci0xMDY4OWRmMy0yOTJkLTQ2MWQtYmQ3MC1hN2Q3MjFiYWY5ZWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GS2fYfo5mexVLH0I0HBD_GPwvz5X082LyJDRu-qMglA)',
    [GHOSTS.ghosted]:
        'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a80c8979-22d6-49c7-bca4-97613a4a9237/d5saelk-59f10b10-a01f-4300-9a6c-06a4cb1edcce.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MGM4OTc5LTIyZDYtNDljNy1iY2E0LTk3NjEzYTRhOTIzN1wvZDVzYWVsay01OWYxMGIxMC1hMDFmLTQzMDAtOWE2Yy0wNmE0Y2IxZWRjY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XUnNlFn3ruZGWjk4zykup6kgTTw3crPmmeO1U-tsXBg)',
}
