console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/CommandUtils.java 45 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.shell.CommandUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.CommandUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#40"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "getEffectivePaths(List&lt;String&gt;)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#59"
 , "c1" : "void"
 , "c2" : "completeCommand(String;List&lt;Candidate&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#72"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "splitPath(String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#83"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "stripDotPathComponents(List&lt;String&gt;)"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#104"
 , "c1" : "void"
 , "c2" : "completePath(MetadataNodeManager;String;List&lt;Candidate&gt;)"
 , "c3" : "8"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method getEffectivePaths arguments List&lt;String &gt;  paths"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.shell.CommandUtils.getEffectivePaths@POLYN166737 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method completeCommand arguments String  commandPrefix|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument candidates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.shell.CommandUtils.completeCommand@POLYN167491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method splitPath arguments String  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method splitPath list of called methods Object monObjet|java.lang.String[] path_splitN168410"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.shell.CommandUtils.splitPath@POLYN168202 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.shell.CommandUtils.splitPath@POLYN168202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method stripDotPathComponents arguments List&lt;String &gt;  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN168925 the MagicNumber/String  '..' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN168925 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN168925 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN168925 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method completePath arguments MetadataNodeManager  nodeManager|String  pathPrefix|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00104] For method completePath list of called methods Object monObjet|boolean pathPrefix_startsWithN170123|java.util.List stripDotPathComponentsN170350|java.util.List data_rootN170467|org.apache.kafka.shell.MetadataNode directory_childN170907|java.util.NavigableMap directory_childrenN171556|java.util.NavigableMap directory_childrenN173007"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument nodeManager is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument pathPrefix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument candidates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN169868 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
