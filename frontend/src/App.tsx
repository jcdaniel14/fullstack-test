import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <div className="w-full p-10">
      <Card>
        <CardHeader>
          <CardTitle>User Manager</CardTitle>
          <CardDescription>You can manager users from here</CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableCell>
                <div className="text-sm">Gustavo</div>
                <div className="text-muted-foreground text-xs">User ID: 1</div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">Administrator</Badge>
              </TableCell>
              <TableCell>
                <Badge>ACTIVE</Badge>
              </TableCell>
              <TableCell align="center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DotsHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>User menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Update user</DropdownMenuItem>
                    <DropdownMenuItem>Deactivate user</DropdownMenuItem>
                    <DropdownMenuItem>Activate user</DropdownMenuItem>
                    <DropdownMenuItem>Delete user</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
