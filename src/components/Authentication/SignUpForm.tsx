
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
      <Tabs className="" defaultValue="Rider" >
        <TabsList className="w-full border ">
          <TabsTrigger value="Rider">Become a Rider</TabsTrigger>
          <p>|</p>
          <TabsTrigger value="Driver">Become a Driver</TabsTrigger>
        </TabsList>
        <TabsContent value="Rider">
          <Card>
          <RiderSignUp></RiderSignUp>
          </Card>
        </TabsContent>
        <TabsContent value="Driver">
          <Card>
            <DriverSignUp></DriverSignUp>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
