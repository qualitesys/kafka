console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java 19 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.tools.ThroughputThrottler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.ThroughputThrottler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ThroughputThrottler"
 , "c2" : "ThroughputThrottler(long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldThrottle(long;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throttle()"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class ThroughputThrottler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.ThroughputThrottler@POLYN169040 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method shouldThrottle arguments long  amountSoFar|long  sendStartMs"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.shouldThrottle@POLYN169584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.shouldThrottle@POLYN169584 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.shouldThrottle@POLYN169584 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.shouldThrottle@POLYN169584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00094] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00094] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00094] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  1000000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  1000000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.throttle@POLYN170191 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00094] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ThroughputThrottler.wakeup@POLYN171867 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ThroughputThrottler.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00094] Public method wakeup is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
