import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtStrategy } from '../../jwt.strategy';
import { GameRepository } from '../repositories/game.repository';
import { AnswerSubmitInterface, GameInitInterface } from '../../interface/game.interface';
export declare class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private authService;
    private readonly questionRepository;
    private rooms;
    private userRooms;
    private roomsSet;
    private userAnswers;
    private userQuestionIndex;
    constructor(authService: JwtStrategy, questionRepository: GameRepository);
    server: Server;
    handleConnection(socket: Socket): Promise<void>;
    handleDisconnect(socket: Socket): Promise<void>;
    addUserToRoomId(roomId: string, userId: string): void;
    addRoomToUserId(roomId: string, userId: string): void;
    getAvailableRooms(): any;
    handleMessage(body: GameInitInterface, socket: Socket): Promise<void>;
    sendQuestion(socket: Socket): Promise<void>;
    submitAnswer(body: AnswerSubmitInterface, socket: Socket): Promise<void>;
    gameEnd(socket: Socket): Promise<void>;
    handleLeaveRoom(data: {
        roomId: string;
    }, socket: Socket): Promise<void>;
    private saveUserScoreData;
}
