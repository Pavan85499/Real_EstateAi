import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentProperties() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Property" />
          <AvatarFallback>P1</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">123 Main Street, Apt 4B</p>
          <p className="text-sm text-muted-foreground">Added 2 days ago</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-2" variant="outline">
            Condo
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg" alt="Property" />
          <AvatarFallback>P2</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">456 Oak Avenue</p>
          <p className="text-sm text-muted-foreground">Added 5 days ago</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-2" variant="outline">
            Single Family
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Property" />
          <AvatarFallback>P3</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">789 Pine Street, Unit 12</p>
          <p className="text-sm text-muted-foreground">Added 1 week ago</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-2" variant="outline">
            Townhouse
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Property" />
          <AvatarFallback>P4</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">101 Maple Drive</p>
          <p className="text-sm text-muted-foreground">Added 2 weeks ago</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-2" variant="outline">
            Single Family
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg" alt="Property" />
          <AvatarFallback>P5</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">222 Cedar Lane, Suite 3</p>
          <p className="text-sm text-muted-foreground">Added 3 weeks ago</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-2" variant="outline">
            Commercial
          </Badge>
        </div>
      </div>
    </div>
  )
}

