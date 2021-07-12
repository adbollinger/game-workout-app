import { Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

export function tokenAuth(req: Request, res: Response, next: () => void) {
    if (!req || !req.cookies) return res.sendStatus(403);
    
    const token = req.cookies.token || '';

    try {
        if (!token) {
            return res.sendStatus(401);
        }

        const JWTSecret = process.env.JWTSecret || '';

        jwt.verify(token, JWTSecret, (err: VerifyErrors | null, payload: any) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.body.payload = payload;
            next();
        });
    } catch {
        return res.sendStatus(500);
    }
}