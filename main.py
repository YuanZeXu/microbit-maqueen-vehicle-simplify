def on_received_value(name, value):
    global LM, RM, R, B, Y, G
    if name == "LM":
        LM = Math.map(value, 0, 1024, 5, 0)
    if name == "RM":
        RM = Math.map(value, 0, 1024, 5, 0)
    if name == "R" and value == 1:
        R = True
    else:
        R = False
    if name == "B" and value == 1:
        B = True
    else:
        B = False
    if name == "Y" and value == 1:
        Y = True
    else:
        Y = False
    if name == "G" and value == 1:
        G = True
    else:
        G = False
radio.on_received_value(on_received_value)

G = False
Y = False
B = False
R = False
RM = 0
LM = 0
radio.set_group(1)

def on_forever():
    basic.clear_screen()
    led.plot(0, LM)
    led.plot(4, RM)
    if R:
        led.plot(2, 0)
    if B:
        led.plot(0, 2)
    if Y:
        led.plot(4, 2)
    if G:
        led.plot(2, 4)
basic.forever(on_forever)
