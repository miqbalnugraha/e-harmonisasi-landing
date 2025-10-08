import { Base64 } from 'js-base64';

export function encrypt_s(string: string) {
    const string_1 = crypto.randomUUID() + "##" + string + "@@" + crypto.randomUUID()
    const encode = Base64.encode(string_1);
    const res = encode.replace("=", "--")
    return res;
}

export function decrypt_s(string: string) {
    const replace = string.replace("--", "=")
    const decode = Base64.decode(replace);
    const string_1 = decode.split("##")
    const string_2 = string_1[1].split("@@")
    return string_2[0];
}

export default encrypt_s;