from pathlib import Path
import json
import os  # 添加这个导入

folder_path = Path(r'D:\code\.cursor-tutor\video\乐乐课堂\高中数学同步乐乐课堂')
output_file = r'D:\code\file_list.json'

# 存储文件信息的列表
file_list = []

# 使用 rglob() 递归遍历所有文件
for file in folder_path.rglob('*'):
    if file.is_file():
        # 计算相对路径
        relative_path = file.relative_to(folder_path)
        
        # 加上 ".\\乐乐课堂\\" 前缀
        url = ".\\乐乐课堂\\高中数学同步乐乐课堂\\" + str(relative_path).replace(os.sep, '\\')
        
        # 创建文件信息的字典
        file_info = {
            "title": file.name,
            "url": url
        }
        
        # 添加到文件列表
        file_list.append(file_info)

# 将文件列表保存为 JSON 格式
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(file_list, f, ensure_ascii=False, indent=4)

print(f'文件列表已保存到 {output_file}')
