import random

def main_menu():
    print("\n" + "="*30)
    print(" GREATER OR LESS THAN GAME ")
    print("="*30)
    print("Rules:")
    print("1. The computer picks a random number (0-11).")
    print("2. You choose 'Greater' or 'Less'.")
    print("3. Enter your own number (1-10).")
    print("4. You win if your logic matches the result!")
    print("="*30)

def play_game():
    main_menu()
    
    # 1. Generate computer's random number
    computer_num = random.randint(0, 11)
    
    # 2. Get user's choice (Greater or Less)
    choice = input("Will your number be (G)reater or (L)ess than the computer's? ").strip().upper()
    while choice not in ['G', 'L']:
        choice = input("Invalid! Please enter 'G' for Greater or 'L' for Less: ").strip().upper()

    # 3. Get user's number input
    try:
        user_num = int(input("Enter your number (1-10): "))
        if not (1 <= user_num <= 10):
            print("Number must be between 1 and 10!")
            return
    except ValueError:
        print("Please enter a valid whole number.")
        return

    print(f"\nComputer's number was: {computer_num}")
    print(f"Your number: {user_num}")

    # 4. Compare and determine winner
    if choice == 'G':
        if user_num > computer_num:
            print("🎉 YOU WIN! Your number is greater.")
        else:
            print("❌ YOU LOSE! Your number was not greater.")
    elif choice == 'L':
        if user_num < computer_num:
            print("🎉 YOU WIN! Your number is less.")
        else:
            print("❌ YOU LOSE! Your number was not less.")

# Start the game
if __name__ == "__main__":
    while True:
        play_game()
        again = input("\nPlay again? (y/n): ").lower()
        if again != 'y':
            print("Thanks for playing!")
            break