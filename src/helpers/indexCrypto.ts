//Simply to secure communication between the different routes
import crypto from 'crypto';

const SECRET = 'HR-API';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt:string, password:string) => {
    return crypto.createHmac('sha256',[salt,password].join('/'))
            .update(SECRET)
            .digest('hex');
};