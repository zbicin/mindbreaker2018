import BaseState from './base';
import MenuState from './menu';
import { setInterval } from 'timers';

export default class GameState extends BaseState {
    static STATE_NAME = 'game';

    private intervalHandle: Phaser.TimerEvent;
    private countdown: number;
    private counterText: Phaser.Text;

    public create(): void {
        this.intervalHandle = this.game.time.events.loop(100, this.onInterval, this);
        this.countdown = 1;
        this.counterText = this.drawText(this.countdown.toFixed(1), this.game.world.centerX, this.game.world.centerY);
    }

    public shutdown(): void {
        this.game.time.events.remove(this.intervalHandle);
    }

    private onInterval() {
        this.countdown = Math.round((this.countdown * 10) - 1) / 10;
        this.counterText.text = this.countdown.toFixed(1);

        if (this.countdown === 0) {
            this.state.start(MenuState.STATE_NAME);
        }
    }

}