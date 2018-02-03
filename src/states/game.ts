import BaseState from './base';
import MenuState from './menu';
import { ButtonType } from '../utils/enums';

export default class GameState extends BaseState {
    static STATE_NAME = 'game';

    private intervalHandle: Phaser.TimerEvent;
    private countdown: number;
    private counterText: Phaser.Text;
    private leftPanel: Phaser.Button;
    private rightPanel: Phaser.Button;

    public create(): void {
        this.intervalHandle = this.game.time.events.loop(100, this.onInterval, this);
        this.countdown = 10;
        this.counterText = this.drawText(this.countdown.toFixed(1), this.game.world.centerX, this.game.world.centerY);
        this.leftPanel = this.drawPanel(this.onLeftClick, ButtonType.Blue, 10, this.game.world.centerY, 0, 0.5);
        this.rightPanel = this.drawPanel(this.onRightClick, ButtonType.Blue, this.game.world.width - 10, this.game.world.centerY, 1, 0.5);
    }

    public shutdown(): void {
        this.game.time.events.remove(this.intervalHandle);
    }

    private onLeftClick(): void {
        this.modifyCountdown(0.5);
    }

    private onRightClick(): void {
        this.modifyCountdown(-0.5);
    }

    private onInterval() {
        this.modifyCountdown(-0.1);
        this.counterText.text = this.countdown.toFixed(1);

        if (this.countdown === 0) {
            this.state.start(MenuState.STATE_NAME);
        }
    }

    private modifyCountdown(delta: number): void {
        this.countdown = Math.round((this.countdown + delta) * 10) / 10;
    }

}