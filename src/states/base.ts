import * as Assets from '../assets';
import { ButtonType } from '../utils/enums';

export default abstract class BaseState extends Phaser.State {
    protected drawText(textContent: string, x: number, y: number, anchorX = 0.5, anchorY = 0.5): Phaser.Text {
        let textStyle: Phaser.PhaserTextStyle = {
            font: 'bold 20pt ' + Assets.CustomWebFonts.UipackFontKenVectorFuture.getFamily(),
            fill: 'white',
            align: 'center',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        };
        let text = this.game.add.text(x, y, textContent, textStyle);
        text.anchor.setTo(anchorX, anchorY);
        return text;
    }

    protected drawPanel(callback: Function, type: ButtonType, x: number, y: number, anchorX = 0.5, anchorY = 0.5): Phaser.Button {
        let overFrame, outFrame, downFrame, upFrame;
        let wrapperCallback = () => {
            this.game.sound.play(Assets.Audio.UipackSoundsClick1.getName());
            callback.apply(this);
        };
        switch (type) {
            case ButtonType.Blue:
                overFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton08;
                outFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton08;
                downFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton10;
                upFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton08;
                break;
            case ButtonType.Red:
                overFrame = Assets.Atlases.UipackSpritesheetRedSheet.Frames.RedButton08;
                outFrame = Assets.Atlases.UipackSpritesheetRedSheet.Frames.RedButton08;
                downFrame = Assets.Atlases.UipackSpritesheetRedSheet.Frames.RedButton10;
                upFrame = Assets.Atlases.UipackSpritesheetRedSheet.Frames.RedButton08;
                break;
        }
        let button = this.game.add.button(
            x,
            y,
            Assets.Atlases.UipackSpritesheetBlueSheet.getName(),
            wrapperCallback,
            this,
            overFrame,
            outFrame,
            downFrame,
            upFrame);
        button.anchor.setTo(anchorX, anchorY);
        button.scale.setTo(4);
        return button;
    }

    protected drawTextButton(callback: Function, textContent: string, type: ButtonType, x: number, y: number, anchorX = 0.5, anchorY = 0.5): void {
        let overFrame, outFrame, downFrame, upFrame;
        let wrapperCallback = () => {
            this.game.sound.play(Assets.Audio.UipackSoundsClick1.getName());
            callback.apply(this);
        };
        switch (type) {
            case ButtonType.Blue:
                overFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton05;
                outFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton05;
                downFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton01;
                upFrame = Assets.Atlases.UipackSpritesheetBlueSheet.Frames.BlueButton05;
                break;
        }
        let button = this.game.add.button(
            x,
            y,
            Assets.Atlases.UipackSpritesheetBlueSheet.getName(),
            wrapperCallback,
            this,
            overFrame,
            outFrame,
            downFrame,
            upFrame);
        button.anchor.setTo(anchorX, anchorY);
        this.drawText(textContent, x, y, anchorX, anchorY);
    }
}