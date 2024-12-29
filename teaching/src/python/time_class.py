class Time():
    """Represents the time of day."""
    def __init__(self, hour=0, minute=0, second=0):
        self.hour = hour
        self.minute = minute
        self.second = second

    def print_time(self):
        s = f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
        print(s)

    def make_time(self):
        time = Time()
        time.hour = self.hour
        time.minute = self.minute
        time.second = self.second
        return time
    
    def time_to_int(self):
        minutes = self.hour * 60 + self.minute
        seconds = minutes * 60 + self.second
        return seconds
    
if __name__ == '__main__':
    t1 = Time(9, 40, 0)
    t1.make_time()
    t1.print_time()