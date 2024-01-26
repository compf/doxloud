import { Uploader } from "../src/uploading/uploader";

describe('main', () => {
    it('should log "Hello World"', () => {
        const blank=Buffer.from("JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9UaXRsZSA8RkVGRjAwNDQwMDZGMDA2MzAwNzUwMDZEMDA2NTAwNkUwMDc0MDA2RjAwMjAwMDczMDA2OTAwNkUwMDIwMDA3NDAwRUQwMDc0MDA3NTAwNkMwMDZGPgovUHJvZHVjZXIgKFNraWEvUERGIG0xMTQgR29vZ2xlIERvY3MgUmVuZGVyZXIpPj4KZW5kb2JqCjMgMCBvYmoKPDwvY2EgMQovQk0gL05vcm1hbD4+CmVuZG9iago0IDAgb2JqCjw8L0xlbmd0aCA4ND4+IHN0cmVhbQoxIDAgMCAtMSAwIDg0MiBjbQpxCi43NSAwIDAgLjc1IDAgMCBjbQoxIDEgMSBSRyAxIDEgMSByZwovRzMgZ3MKMCAwIDc5NCAxMTIzIHJlCmYKUQoKZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqCjw8L1R5cGUgL1BhZ2UKL1Jlc291cmNlcyA8PC9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDw8L0czIDMgMCBSPj4+PgovTWVkaWFCb3ggWzAgMCA1OTYgODQyXQovQ29udGVudHMgNCAwIFIKL1N0cnVjdFBhcmVudHMgMAovUGFyZW50IDUgMCBSPj4KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzIgMCBSXT4+CmVuZG9iago2IDAgb2JqCjw8L1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDUgMCBSPj4KZW5kb2JqCnhyZWYKMCA3CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMzQ0IDAwMDAwIG4gCjAwMDAwMDAxNzUgMDAwMDAgbiAKMDAwMDAwMDIxMiAwMDAwMCBuIAowMDAwMDAwNTMyIDAwMDAwIG4gCjAwMDAwMDA1ODcgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDcKL1Jvb3QgNiAwIFIKL0luZm8gMSAwIFI+PgpzdGFydHhyZWYKNjM0CiUlRU9GCg==","base64")
       let uploader=new Uploader();
       let metadata={
        "documentId":"unique id",
        "documentDescription":"Some description",
        "documentType":"pdf",
        "documentAuthorId":"author id",
        "uploaderId":"uploader id",
        "tags":{
            "tag1":{
                "origin":"ocr",
                "positions":[
                    {
                        "page":1,
                        "x":1,
                        "y":1,
                        "width":1,
                        "height":1
                    }
                ]
            }
         
        }
        }
        const helloWorld = Buffer.from("Hello World").toString("base64");
        let encoded=Buffer.from(JSON.stringify(metadata)).toString("base64")
        let status=uploader.processUpload(encoded,blank)
        expect(status).toBe(200);
    });
});
