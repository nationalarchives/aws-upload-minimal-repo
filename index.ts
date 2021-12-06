import {Upload} from "@aws-sdk/lib-storage"
import {PutObjectCommandInput, S3Client, S3ClientConfig} from "@aws-sdk/client-s3";

// @ts-ignore
window.fetch = async function (request: Request, init) {
    console.log(request.method)
    const result: HTMLHeadingElement = document.querySelector(".result")!
    result.innerText = request.method
    return Promise.resolve("")
}

window.addEventListener('DOMContentLoaded', (event) => {
    const form: HTMLFormElement = document.querySelector(".upload")!
    form.addEventListener("submit", ev => {
        ev.preventDefault()
        const fileSelector: HTMLInputElement = document.querySelector(".file")!
        const file = fileSelector.files!.item(0)
        const config: S3ClientConfig = {
            region: "eu-west-2",
            endpoint: "https://fake-endpoint-url/",
            credentials: {
                accessKeyId: "placeholder-id",
                secretAccessKey: "placeholder-secret"
            },
            forcePathStyle: true
        }
        const params: PutObjectCommandInput = {
            Key: "test",
            Bucket: `fake-bucket`,
            ACL: "bucket-owner-read",
            Body: file!
        }
        const client = new S3Client(config)
        new Upload({client, params}).done().then(r => console.log(r))
    })
});
