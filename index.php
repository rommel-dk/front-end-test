<?php

//ini_set('display_errors', '1');
//ini_set('display_startup_errors', '1');
//error_reporting(E_ALL);

//setlocale(LC_ALL, 'da_DK.UTF-8');

if (!function_exists('TS_DrawObject')) {
	function TS_DrawObject($obj, $mode = 'display', $depth = 0) {
		if ($mode == 'file') {
			$sep = " ";
			$newline = "\n";
		}
		else {
			$sep = "&nbsp;";
			$newline = "<br />";
		}
		$s = '';
		if (is_object($obj) || is_array($obj)) {
			$s.= ' {' . $newline;
			foreach ($obj as $k => $v) {
				$s.= str_repeat($sep, (($depth + 1) * 8)) . '[' . $k . ']';
				$s.= TS_DrawObject($v, $mode, ($depth + 1));
			}
			$s.= str_repeat($sep, ($depth * 8)) . '}';
		}
		else {
			if ($depth > 0) $s.= ' => ';
			if ($obj === NULL) $s.= 'NULL';
			else $s.= '[' . $obj . ']';
		}
		$s.= $newline;
		if ($depth == 0) $s.= $newline;
		return $s;
	}
}

$url = 'https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/data.json';

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$result = curl_exec($ch);
curl_close($ch);

$data = json_decode($result, true, JSON_UNESCAPED_UNICODE);
//echo TS_DrawObject($data); die();

$za1 = '<za>';
$za2 = '</za>';
$zb1 = '<zb>';
$zb2 = '</zb>';

?><!DOCTYPE html>
<html lang="en">
<head>
	
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	
    <title>front-end-test</title>
	
	<link rel="icon" href="favicon/favicon-32.png" sizes="32x32" />
	
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="responsive.css" />
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="scripts.js"></script>
	
</head>
<body>
	
	<div class="curtain"><div class="loader"><div class="spinner"></div></div></div>
	
	<div class="reveal hero-1">
		
		<div class="web">
			
			<div class="lines">
				<div class="line l_1 thick"></div>
				<div class="line l_2 thin"></div>
				<div class="line l_3 thin"></div>
			</div>
			
			<div class="title">
				<?php
				$s = $data['hero-1']['title'];
				$ss = $za1 . substr($s, 0, 16) . $za2
					. $zb1 . substr($s, 16, 5) . $zb2
					. $za1 . substr($s, 21, 1) . $za2
					. $zb1 . substr($s, 22, 1) . $zb2
					. $za1 . substr($s, 23, 7) . $za2
					. $zb1 . substr($s, 30) . $zb2;
				echo $ss;
				?>
			</div>
			
		</div>
		
		<div class="description">
			<?php echo $data['hero-1']['description']; ?>
		</div>
		
		<div class="reveal button has_arrow" scrollto="tiles">
			<svg width="125" height="70" viewBox="0 0 125 70" fill="none">
				<path d="M0 6H107V40" stroke="#f54e52" stroke-width="6"></path>
				<path class="svg_swing_v" d="M107 6V40" stroke="#f54e52" stroke-width="6"></path>
				<path class="svg_swing_v" d="M91 26L107 42L122 26" stroke="#f54e52" stroke-width="6"></path>
			</svg>
		</div>
		
	</div>
	
	<?php if (is_array($data['tiles'])) { $n = 0; ?>
	<div class="reveal tiles">
		
		<?php foreach ($data['tiles'] as $tile) { $n++; ?>
		<div class="tile">
			
			<a ts-n="<?php echo $n; ?>" class="has_arrow" href="<?php echo $tile['href']; ?>">
				
				<div class="image">
					
					<img src="<?php echo $tile['image']; ?>" alt="<?php echo $tile['image-alt']; ?>" />
					
					<?php if ($tile['type'] || $tile['date']) { ?>
					<div class="meta">
						<span class="type"><?php echo $tile['type']; ?></span> <span class="date"><?php echo (strtotime($tile['date']) ? date('j. M Y', strtotime($tile['date'])) : $tile['date']); ?></span>
					</div>
					<?php } ?>
					
				</div>
				
				<?php if ($tile['author']) { ?>
				<div class="reveal author"><?php echo $tile['author']; ?></div>
				<?php } ?>
				
				<?php if ($tile['title']) { ?>
				<div class="reveal title"><?php echo $tile['title']; ?></div>
				<?php } ?>
				
				<div class="reveal button">
					<svg width="90" height="26" viewBox="0 0 90 26" fill="none">
						<path d="M0 13H67" stroke="#f54e52" stroke-width="4"></path>
						<path class="svg_swing_h" d="M0 13H67" stroke="#f54e52" stroke-width="4"></path>
						<path class="svg_swing_h" d="M57 3L67 13L57 23" stroke="#f54e52" stroke-width="4"></path>
					</svg>
				</div>
				
			</a>
			
		</div>
		<?php } ?>
		
	</div>
	<?php } ?>
	
	<div class="reveal hero-2">
		
		<div class="web">
			
			<div class="lines">
				<div class="line l_1 thick"></div>
				<div class="line l_2 thick"></div>
				<div class="line l_3 thin"></div>
			</div>
			
			<div class="title">
				<?php
				$s = $data['hero-2']['title'];
				$ss = $za1 . substr($s, 0, 1) . $za2
					. $zb1 . substr($s, 1, 6) . $zb2
					. $za1 . substr($s, 7) . $za2;
				echo $ss;
				?>
			</div>
			
		</div>
		
		<div class="middle">
			
			<div class="reveal subtitle button has_arrow" scrollto="banner">
				<span><?php echo $data['hero-2']['subtitle']; ?></span>
				<div class="arrow">
					<svg width="170" height="36" viewBox="0 0 170 36" fill="none">
						<path d="M0 18H145" stroke="#f54e52" stroke-width="7"></path>
						<path class="svg_swing_h" d="M0 18H145" stroke="#f54e52" stroke-width="7"></path>
						<path class="svg_swing_h" d="M128 2L145 18L128 34" stroke="#f54e52" stroke-width="7"></path>
					</svg>
				</div>
			</div>
			
			<div class="reveal description">
				<?php echo $data['hero-2']['description']; ?>
			</div>
			
		</div>
		
	</div>
	
	<div class="reveal banner">
		
		<div class="background">
			
			<img alt="<?php echo $data['banner']['image-alt']; ?>" src="<?php echo $data['banner']['image']; ?>" />
		
			<?php if ($data['banner']['author'] || $data['banner']['year'] || $data['banner']['description']) { ?>
			<div class="reveal excerpt">
				
				<?php if ($data['banner']['author'] || $data['banner']['year']) { ?>
				<div class="meta">
					<span class="author"><?php echo $data['banner']['author']; ?></span><?php if ($data['banner']['author'] && $data['banner']['year']) { ?><span class="connector">, </span><?php } ?><span class="year"><?php echo $data['banner']['year']; ?></span>
				</div>
				<?php } ?>
				
				<?php if ($data['banner']['description']) { ?>
				<div class="description">
					<?php echo $data['banner']['description']; ?>
				</div>
				<?php } ?>
				
				<a class="reveal button has_arrow" scrollto="imagewide">
					<svg width="110" height="26" viewBox="0 0 110 26" fill="none">
						<path d="M0 13H67" stroke="#f54e52" stroke-width="4"></path>
						<path class="svg_swing_h" d="M0 13H67" stroke="#f54e52" stroke-width="4"></path>
						<path class="svg_swing_h" d="M57 3L67 13L57 23" stroke="#f54e52" stroke-width="4"></path>
					</svg>
				</a>
				
			</div>
			<?php } ?>
			
		</div>
		
		<div class="text<?php if ($data['banner']['subtitle'] || $data['banner']['year'] || $data['banner']['year']) { ?> has_data"<?php } ?>>
		
			<div class="reveal subtitle"><?php echo $data['banner']['subtitle']; ?></div>
			
			<?php if ($data['banner']['author'] || $data['banner']['year']) { ?>
			<div class="web">
				<div class="lines">
					<div class="line l_1 medium"></div>
				</div>
				<div class="reveal author"><?php echo $data['banner']['author']; ?></div>
				<div class="reveal title"><?php echo $data['banner']['title']; ?></div>
			</div>
			<?php } ?>
			
			<div class="reveal button has_arrow" scrollto="imagewide">
				<svg width="150" height="90" viewBox="0 0 150 90" fill="none">
					<path d="M15 18H150" stroke="#f54e52" stroke-width="7"></path>
					<path d="M18 15V60" stroke="#f54e52" stroke-width="7"></path>
					<path class="svg_swing_v" d="M18 15V60" stroke="#f54e52" stroke-width="7"></path>
					<path class="svg_swing_v" d="M2 44L18 60L34 44" stroke="#f54e52" stroke-width="7"></path>
				</svg>
			</div>
			
		</div>
		
	</div>
	
	<div class="reveal imagewide">
		
		<img src="<?php echo $data['imagewide']['image']; ?>" alt="<?php echo $data['imagewide']['image-alt']; ?>" />
		
	</div>
	
	<div class="reveal imagetext">
		
		<div class="canvas">
			
			<img src="<?php echo $data['imagetext']['image']; ?>" alt="<?php echo $data['imagetext']['image-alt']; ?>" />
			
			<div class="web">
				<div class="lines">
					<div class="line l_1 medium"></div>
				</div>
				<div class="reveal title"><?php echo $data['imagetext']['title']; ?></div>
			</div>
			
			<div class="reveal arrow">
				<svg width="125" height="100" viewBox="0 0 125 100" fill="none">
					<path d="M0 6H107V100" stroke="#7df7ff" stroke-width="6"></path>
				</svg>
			</div>
			
		</div>
		
		<div class="footer">
			
			<div class="reveal arrow">
				<svg width="125" height="120" viewBox="0 0 125 120" fill="none">
					<path d="M107 0V90" stroke="#fff064" stroke-width="6"></path>
					<path class="svg_swing_v" d="M107 0V90" stroke="#fff064" stroke-width="6"></path>
					<path class="svg_swing_v" d="M91 76L107 92L122 76" stroke="#fff064" stroke-width="6"></path>
				</svg>
			</div>
			
			<a class="reveal button cta" target="_blank" href="<?php echo $data['imagetext']['href']; ?>">
				<div class="href-text"><?php echo $data['imagetext']['href-text']; ?></div>
				<div class="href-text-alt"><?php echo $data['imagetext']['href-text-alt']; ?></div>
			</a>
			
			<a class="reveal logo" target="_blank" title="Rommel" href="https://rommel.dk/">
				<img src="assignment-assets/images/logo.svg" alt="Rommel" />
			</a>
			
		</div>
		
	</div>
	
</body>
</html>