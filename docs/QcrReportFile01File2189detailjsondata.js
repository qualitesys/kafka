console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java 29 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.StringFormatter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.StringFormatter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#38"
 , "c1" : "String"
 , "c2" : "dateString(long;ZoneOffset)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#50"
 , "c1" : "String"
 , "c2" : "durationString(long)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#79"
 , "c1" : "String"
 , "c2" : "prettyPrintGrid(List&lt;List&lt;String&gt;&gt;)"
 , "c3" : "10"
 , "c4" : "25"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.svg" }

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
"data11" : [
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method dateString arguments long  timeMs|ZoneOffset  zoneOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method durationString arguments long  periodMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  'h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  'm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.trogdor.common.StringFormatter.durationString@POLYN159338 the MagicNumber/String  's' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method prettyPrintGrid arguments List&lt;List&lt;String &gt; &gt;  lines"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00079] For method prettyPrintGrid list of called methods Object monObjet|int col_sizeN161342|V lines_getN162746|V cols_getN163021|V widths_getN163115"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument lines is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  ' columns in row ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  ', but got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.trogdor.common.StringFormatter.prettyPrintGrid@POLYN160904 the MagicNumber/String  '%n' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/StringFormatter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
