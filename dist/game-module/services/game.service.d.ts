import { AppGateway } from '../socketController/socket.gateway';
export declare class GameService {
    private appGateWay;
    constructor(appGateWay: AppGateway);
    createRoom(userId: string): Promise<{
        code: number;
        message: string;
        data: {
            roomId: any;
        };
    }>;
}
