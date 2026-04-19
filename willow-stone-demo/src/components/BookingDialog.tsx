import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Book an Appointment</DialogTitle>
        <DialogDescription>
          Choose your preferred treatment and we'll confirm your appointment within 24 hours.
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4 pt-2" onSubmit={(e) => { e.preventDefault(); onOpenChange(false); }}>
        <div className="space-y-2">
          <Label htmlFor="booking-name">Full Name</Label>
          <Input id="booking-name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-email">Email</Label>
          <Input id="booking-email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-phone">Phone</Label>
          <Input id="booking-phone" type="tel" placeholder="07000 000000" />
        </div>
        <div className="space-y-2">
          <Label>Treatment Interest</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a treatment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="massage">Massage Therapy</SelectItem>
              <SelectItem value="facial">Facial Treatments</SelectItem>
              <SelectItem value="body">Body Treatments</SelectItem>
              <SelectItem value="holistic">Holistic Therapies</SelectItem>
              <SelectItem value="package">Wellness Packages</SelectItem>
              <SelectItem value="experience">Spa Experiences</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Request Appointment
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We'll respond within 24 hours to confirm your booking.
        </p>
      </form>
    </DialogContent>
  </Dialog>
);

export default BookingDialog;