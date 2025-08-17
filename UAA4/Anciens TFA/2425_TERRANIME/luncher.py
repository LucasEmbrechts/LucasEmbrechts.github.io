import tkinter as tk
from tkinter import messagebox, PhotoImage
import os
import webbrowser

# Masquer la console sous Windows
if os.name == 'nt':
    import ctypes
    ctypes.windll.user32.ShowWindow(ctypes.windll.kernel32.GetConsoleWindow(), 0)

# Définir le chemin de base
BASE_DIR = "G:\\2506_aTT_"
os.makedirs(BASE_DIR, exist_ok=True)  # Crée le dossier s'il n'existe pas

# Chemin absolu pour enregistrer les utilisateurs
USER_FILE = os.path.join(BASE_DIR, "utilisateurs.txt")

# Fonction pour enregistrer un nouvel utilisateur
def create_user():
    username = username_entry.get()
    password = password_entry.get()

    if username == "" or password == "":
        messagebox.showerror("Erreur", "Veuillez remplir tous les champs.")
        return

    try:
        mode = "a" if os.path.exists(USER_FILE) else "w"
        with open(USER_FILE, mode) as file:
            file.write(f"{username},{password}\n")
        messagebox.showinfo("Succès", f"Utilisateur {username} créé avec succès!")
    except Exception as e:
        messagebox.showerror("Erreur", f"Impossible de créer l'utilisateur : {str(e)}")

# Fonction de connexion
def login():
    user = username_entry.get()
    pwd = password_entry.get()

    if user == "" or pwd == "":
        messagebox.showerror("Erreur", "Veuillez remplir tous les champs.")
        return

    if os.path.exists(USER_FILE):
        with open(USER_FILE, "r") as file:
            users = file.readlines()
            for line in users:
                stored_user, stored_pwd = line.strip().split(",")
                if user == stored_user and pwd == stored_pwd:
                    messagebox.showinfo("Succès", "Connexion réussie ! Ouverture de TERRANIME...")
                    root.destroy()

                    # Ouvre le fichier HTML s'il existe
                    menu_path = os.path.abspath("G:/2506_aTT_/html/menu.html")
                    if os.path.exists(menu_path):
                        webbrowser.open(f"file://{menu_path}")
                    else:
                        messagebox.showerror("Erreur", "Le fichier menu.html n'a pas été trouvé.")
                    return

        messagebox.showerror("Erreur", "Identifiants incorrects.")
    else:
        messagebox.showerror("Erreur", "Aucun utilisateur enregistré.")

# Interface graphique
root = tk.Tk()
root.title("Launcher - TERRANIME")
root.geometry("400x300")
root.resizable(True, True)

# Essayer de charger une image de fond
try:
    background_image = PhotoImage(file="G:/2506_aTT_/sources/img/fond.png")
    background_label = tk.Label(root, image=background_image)
    background_label.place(relwidth=1, relheight=1)
except Exception as e:
    print("Image de fond non trouvée, en utilisant un fond simple.")

# Cadre principal avec fond
frame = tk.Frame(root, bg="#2F4F4F", bd=5)
frame.place(relwidth=1, relheight=1)

# Titre
title_label = tk.Label(frame, text="TERRANIME Launcher", font=("Arial", 20, "bold"), fg="white", bg="#2F4F4F")
title_label.pack(pady=10)

# Sous-titre
intro_label = tk.Label(frame, text="Connexion ou création d'utilisateur", font=("Arial", 12), fg="white", bg="#2F4F4F")
intro_label.pack(pady=10)

# Champ nom d'utilisateur
username_label = tk.Label(frame, text="Nom d'utilisateur", font=("Arial", 10), fg="white", bg="#2F4F4F")
username_label.pack()
username_entry = tk.Entry(frame, font=("Arial", 12), width=30)
username_entry.pack(pady=5)

# Champ mot de passe
password_label = tk.Label(frame, text="Mot de passe", font=("Arial", 10), fg="white", bg="#2F4F4F")
password_label.pack()
password_entry = tk.Entry(frame, show="*", font=("Arial", 12), width=30)
password_entry.pack(pady=5)

# Boutons
button_frame = tk.Frame(frame, bg="#2F4F4F")
button_frame.pack(pady=20)

login_button = tk.Button(button_frame, text="Se connecter", font=("Arial", 12), fg="white", bg="#4CAF50",
                         command=login, relief="raised", width=20)
login_button.grid(row=0, column=0, padx=10)

create_button = tk.Button(button_frame, text="Créer un utilisateur", font=("Arial", 12), fg="white", bg="#008CBA",
                          command=create_user, relief="raised", width=20)
create_button.grid(row=0, column=1, padx=10)

# Lancer la boucle de l'interface
root.mainloop()
