// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command] //Define que estas funções vão para o frontend
fn saudacao_personalizada(name: &str) -> String{
    format!("Olá, {}! Este comando veio direto do Rust 🦀", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![saudacao_personalizada])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
