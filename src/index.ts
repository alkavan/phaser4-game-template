import {Game, Scene} from "@phaserjs/phaser";
import {Loader} from "@phaserjs/phaser/loader";
import {ImageFile} from "@phaserjs/phaser/loader/files";
import {StaticWorld} from "@phaserjs/phaser/world";
import {Sprite} from "@phaserjs/phaser/gameobjects";
import {AddChild} from "@phaserjs/phaser/display";
import {BackgroundColor, Canvas, GlobalVar, Parent, Scenes} from "@phaserjs/phaser/config";

class Demo extends Scene
{
    constructor ()
    {
        super();

        const loader = new Loader();

        loader.add(ImageFile('phaser3_logo', 'assets/phaser3-logo.png'));

        loader.start().then(() => {

            const world = new StaticWorld(this);

            const rocket = new Sprite(412, 93, 'phaser3_logo');

            AddChild(world, rocket);

        });
    }
}

new Game(
    Canvas(),
    Parent('game'),
    GlobalVar('Phaser4'),
    BackgroundColor(0x2d2d2d),
    Scenes(Demo)
);
