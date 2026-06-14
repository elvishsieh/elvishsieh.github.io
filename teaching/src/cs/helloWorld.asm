; NASM - The Netwide Assembler
; nasm -f win64 helloWorld.asm -o helloWorld.obj
; clang helloWorld.obj -o helloWorld.exe

bits 64
default rel

segment .data
    msg db "Hello, World!", 13, 10, 0    ; 13, 10 is CR/LF newline for Windows
    msg_len equ $ - msg

segment .bss
    bytes_written resd 1                  ; Variable to store number of written bytes

segment .text
    global main
    extern GetStdHandle
    extern WriteFile
    extern ExitProcess

main:
    push rbp
    mov rbp, rsp
    sub rsp, 40                 ; Shadow space (32 bytes) + 8 bytes alignment

    ; Step 1: Get Handle to stdout (-11)
    mov rcx, -11                ; STD_OUTPUT_HANDLE = -11
    call GetStdHandle
    mov rbx, rax                ; Save the returned handle to RBX

    ; Step 2: Call WriteFile(handle, msg, length, &bytes_written, 0)
    mov rcx, rbx                ; Parameter 1: File Handle
    lea rdx, [msg]              ; Parameter 2: Pointer to message string
    mov r8d, msg_len            ; Parameter 3: String length
    lea r9, [bytes_written]     ; Parameter 4: Pointer to output variable
    mov qword [rsp + 32], 0     ; Parameter 5: Overlapped structural offset (0/NULL)
    call WriteFile

    ; Step 3: Exit cleanly
    xor ecx, ecx                ; Exit code 0
    call ExitProcess
