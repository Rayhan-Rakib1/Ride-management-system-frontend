
import {
  Card,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RiderSignUp } from "./RiderSignUp"
import { DriverSignUp } from "./DriverSignUp"


export function SignUpForm() {
  return (
    <div className="flex max-w-3xl  flex-col gap-6  container mx-auto mt-15 mb-15">
      <Tabs className="" defaultValue="account" >
        <TabsList className="w-full border ">
          <TabsTrigger value="account">Rider Account</TabsTrigger>
          <p>|</p>
          <TabsTrigger value="password">Driver account</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
          <RiderSignUp></RiderSignUp>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <DriverSignUp></DriverSignUp>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
