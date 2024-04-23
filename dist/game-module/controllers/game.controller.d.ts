import { GameService } from '../services/game.service';
export declare class GameController {
    private GameService;
    constructor(GameService: GameService);
    functionStartGame(userId: string): Promise<{
        code: number;
        message: string;
        data: {
            roomId: any;
        };
    }>;
}
