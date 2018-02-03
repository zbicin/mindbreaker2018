import BaseState from './base';
import GameState from './game';
import { ButtonType } from '../utils/enums';
import { Filter, Group } from 'phaser-ce';


export default class MenuState extends BaseState {

    static STATE_NAME = 'menu';

    public create(): void {
        this.game.camera.flash(0x000000, 1000);
        this.drawText('Mindbreaker', this.game.world.centerX, 10, 0.5, 0);
        this.drawButton(this.onPlayClick, 'Play', ButtonType.Blue, this.game.world.centerX, this.game.world.centerY);
    }

    private onPlayClick(): void {
        this.game.state.start(GameState.STATE_NAME);
    }

}
