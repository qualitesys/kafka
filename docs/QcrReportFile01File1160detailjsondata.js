console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java 48 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConnectResource"
 , "c2" : "org.apache.kafka.connect.runtime.rest.resources.LoggingResource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.rest.resources.LoggingResource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#38"
 , "c1" : "void"
 , "c2" : "requestTimeout(long)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#46"
 , "c1" : "Response"
 , "c2" : "listLoggers()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#66"
 , "c1" : "Response"
 , "c2" : "getLogger(String)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#97"
 , "c1" : "Response"
 , "c2" : "setLevel(String;Map<String,String>)"
 , "c3" : "10"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#142"
 , "c1" : "Logger"
 , "c2" : "lookupLogger(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#147"
 , "c1" : "Enumeration<Logger>"
 , "c2" : "currentLoggers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#151"
 , "c1" : "Logger"
 , "c2" : "rootLogger()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#156"
 , "c1" : "Map<String,String>"
 , "c2" : "effectiveLevelToMap(Logger)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00165"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#165"
 , "c1" : "Map<String,String>"
 , "c2" : "levelToMap(Logger)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class LoggingResource contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method requestTimeout arguments long  requestTimeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00046] For method listLoggers list of called methods Object monObjet|java.util.Enumeration&lt;Logger&gt; currentLoggersN173873|Logger rootLoggerN174317"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN173619 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN173619 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method getLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method getLogger list of called methods Object monObjet|Logger rootLoggerN175309|java.util.Enumeration&lt;Logger&gt; currentLoggersN175416"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN174925 the MagicNumber/String  'require non-null name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN174925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN174925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN174925 the MagicNumber/String  'Logger ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN174925 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method setLevel arguments String  namedLogger|Map&lt;String ,String &gt;  levelMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00097] For method setLevel list of called methods Object monObjet|Logger lookupLoggerN177765|java.util.Enumeration&lt;Logger&gt; currentLoggersN177872"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument levelMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  'Desired 'level' parameter was not specified in request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  'invalid log level '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  ''.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method lookupLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method effectiveLevelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#156"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00156] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN179752 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN179752 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method levelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.levelToMap@POLYN180396 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00038] Void method requestTimeout is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00038] Void method requestTimeout is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String 'level' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String 'Desired 'level' parameter was not specified in request.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String ''.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String 'invalid log level '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN176522 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
