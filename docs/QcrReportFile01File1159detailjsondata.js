console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java 32 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class LoggingResource contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN185406 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN185406 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method getLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN186692 the MagicNumber/String  'require non-null name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN186692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN186692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN186692 the MagicNumber/String  'Logger ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN186692 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method setLevel arguments String  namedLogger|Map&lt;String ,String &gt;  levelMap"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument levelMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  'Desired 'level' parameter was not specified in request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  'invalid log level '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  ''.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN188289 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method lookupLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method effectiveLevelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN191519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN191519 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method levelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.levelToMap@POLYN192163 the MagicNumber/String  'level' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
