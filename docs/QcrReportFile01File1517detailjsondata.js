console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html" 
 , "texte" : "File streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java 67 rule violations " 
 , "fic2"  : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.examples.pageview.PageViewTypedDemo"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.examples.pageview.PageViewTypedDemo" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "3"
 , "c4" : "38"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.png" 

 , "ligneplantuml" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class PageViewTypedDemo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00035] The class JSONSerde contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.JSONSerde.deserialize@POLYN208193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.JSONSerde.deserialize@POLYN208193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method serialize arguments String  topic|T  data"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.JSONSerde.serialize@POLYN208701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.JSONSerde.serialize@POLYN208701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.JSONSerde.serialize@POLYN208701 the MagicNumber/String  'Error serializing JSON message' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00039] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00039] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00069] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00069] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00097] The class PageView contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00098] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00099] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00100] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00103] The class UserProfile contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00104] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00105] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00108] The class PageViewByRegion contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00109] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00110] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00111] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00114] The class WindowedPageViewByRegion contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00115] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00116] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00119] The class RegionCount contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00120] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00121] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'streams-pageview-typed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'localhost:9092' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'streams-pageview-input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'streams-userprofile-input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'UNKNOWN' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'streams-pageviewstats-typed-output' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  'streams-pipe-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'streams-pageview-typed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'localhost:9092' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 1000L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'earliest' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'streams-pageview-input' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'streams-userprofile-input' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 24 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'UNKNOWN' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 7 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'streams-pageviewstats-typed-output' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 'streams-pipe-shutdown-hook' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00195] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/PageViewTypedDemo.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.streams.examples.pageview.PageViewTypedDemo.main@POLYN211119 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
