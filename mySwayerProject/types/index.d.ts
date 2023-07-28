// Add your types here like the following,
// then use in JsDoc type comments across your app,
// TypeScript will check your js code and show suggestions,
// example: /** @implements {ITextModel} */ for model class,
// Schema, Model and other types come from Swayer types

/**
 * This callback is displayed as a global member.
 * @callback onRadioChange
 * @param {string} value
 * @returns undefined
 */

interface CreatureDirectorPosition {
    [key: string]: number
}

interface CreatureState {
    direction: string
    position: CreatureDirectorPosition
}

interface MainState {
    score: number
    turns: number
    coinsAmount: number
}

interface PopupState {
    visible: boolean
}

interface BoardState {
    ghosts: HTMLDivElement[]
}

interface ICreatureIntersect {
    creatureRef: HTMLDivElement
    enemyRefs: HTMLDivElement[]
    lastTouchedCoin: Element | null | undefined

    checkIsCoinTouched(): boolean
    checkIsEnemyTouched(): boolean
    checkIsElementStuck(direction: string): boolean
}

interface ICreatureMessenger {
    messenger: MessageChannel

    sendCoinTouched(coin: Element): void
    sendGameLost(): void
}

interface IMainModel extends Model<MainState> {
    state: MainState

    increaseScore(): void
    increaseTurn(): void
    resetModel(): void
}

interface ICreatureModel extends Model<CreatureState> {
    state: CreatureState
    positionInterval: number
    creatureType: string
    creatureId: string
    stepDelay: number
    messenger: null | ICreatureMessenger
    intersect: null | ICreatureIntersect

    updateDirection(): void
    resetDirection(): void
}

interface IPopupModel extends Model<PopupState> {
    state: PopupState

    openPopup(): void
    hidePopup(): void
}

interface IBoardModel extends Model<BoardState> {
    state: BoardState

    updateGhosts(ghosts: HTMLDivElement[]): void
}
