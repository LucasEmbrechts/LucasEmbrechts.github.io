import tkinter as tk
import random
import time

# Créer la fenêtre principale
root = tk.Tk()

# Enlever la barre de titre et empêcher la fenêtre de se redimensionner
root.overrideredirect(True)
root.geometry("600x400+500+200")

# Définir la couleur de fond et le texte
root.configure(bg="black")

# Afficher le titre "HACKED!" en rouge, avec un effet de clignotement
label = tk.Label(root, text="HACKED!", font=("Helvetica", 50, "bold"), fg="red", bg="black")
label.pack(pady=50)

# Ajouter un message d'alerte
message = tk.Label(root, text="System compromised!\nYour personal data is at risk.", font=("Helvetica", 18), fg="yellow", bg="black")
message.pack(pady=20)

# Ajouter un effet de "hack en cours" qui change de couleur aléatoirement
def random_color():
    colors = ["green", "red", "yellow", "white", "blue"]
    return random.choice(colors)

def update_label():
    label.config(fg=random_color())
    root.after(200, update_label)

update_label()

# Ajouter un effet de "clignotement" sur le message
def blink():
    if message.cget("fg") == "yellow":
        message.config(fg="white")
    else:
        message.config(fg="yellow")
    root.after(500, blink)

blink()

# Afficher la fenêtre pendant 10 secondes avant qu'elle se ferme
root.after(20000, root.destroy)

# Lancer la fenêtre
root.mainloop()
