from copy import copy

class Time:
    """Represents a time of day."""

def print_time(time):
    s = f'{time.hour:02d}:{time.minute:02d}:{time.second:02d}'
    print(s)

def make_time(hour, minute, second):
    time = Time()
    time.hour = hour
    time.minute = minute
    time.second = second
    return time

def increment_time(time, hours, minutes, seconds):
    time.hour += hours
    time.minute += minutes
    time.second += seconds
    return time

def add_time(time, hours, minutes, seconds):
    total = copy(time)
    increment_time(total, hours, minutes, seconds)
    return total

if __name__ == '__main__':
    start = make_time(9, 20, 0)
    print_time(start)

    start = make_time(9, 20, 0)
    increment_time(start, 1, 32, 0)
    print_time(start)

    start = make_time(9, 20, 0)
    end = increment_time(start, 1, 32, 0)
    print_time(end)
    print_time(start)

    start = make_time(9, 40, 0)
    end = add_time(start, 1, 32, 0)
    print_time(end)
    print_time(start)