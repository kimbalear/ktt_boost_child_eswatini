<?php
require_once(__DIR__ . '/../../config.php');
global $PAGE, $OUTPUT;

$PAGE->set_context(context_system::instance());
$PAGE->set_url(new moodle_url('/theme/ktt_boost_child_eswatini/pages/terms.php'));
$PAGE->set_title(get_string('terms_title', 'theme_ktt_boost_child_eswatini'));
$PAGE->set_heading(get_string('terms_heading', 'theme_ktt_boost_child_eswatini'));

echo $OUTPUT->header();
//echo $OUTPUT->render_from_template('theme_ktt_boost_child_eswatini/pages/terms', []);
echo $OUTPUT->footer();