import { Card, Input, Textarea } from "@material-tailwind/react"

export const GetInTouch = () => {
    return (<div className=" px-4 py-10">
    <h1 className="text-center">Get in touch</h1>
    <p className="text-center">Are you curious about our offerings or have questions? Get in touch with us and our responsive team will be happy to assist you.</p>
    <div className="grid grid-cols-2 gap-2 py-4">
        <Card className="px-4 py-10">
            
            <p><strong> Business Address:</strong> 48 Green Corner, Green Road, Dhanmondi, Dhaka, Bangladesh 1205</p>
            <p><strong>Phone :</strong> 01707070330</p>
            <p><strong>Email: </strong>garirmela@gmail.com</p>
        </Card>
        <Card className="px-4 py-10 space-y-5">
        <Input type="text" label="Your Name" />
        <Input type="text" label="Your Phone" />
            <Input type="email" label="Your Email" />
            <Textarea  rows={8} label="Message" />
            <button className="bg-primary text-white font-bold py-2 px-4 rounded">Send</button>
        </Card>
    </div>
    </div>)
}