def on_received_number(receivedNumber):
    global enemy, sent
    if not (sent):
        enemy = receivedNumber
        sent = True
radio.on_received_number(on_received_number)

def doLose():
    global score
    basic.show_string("L")
    score += -1
    music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
        MelodyOptions.ONCE)
def doWin():
    global score
    basic.show_string("W")
    score += 1
    music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
enemy = 0
sent = False
radio.set_group(1)
radio.set_transmit_power(7)
player = 0
score = 0
punched = False
sent = False

def on_forever():
    if punched and sent:
        if player == enemy:
            basic.show_string("D")
        elif player == 0:
            if enemy == 1:
                doLose()
            else:
                doWin()
        elif player == 1:
            pass
        else:
            pass
basic.forever(on_forever)
