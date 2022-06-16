console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java 86 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
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
 , "c4" : "67"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00058] The class RestServer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method createConnectors arguments List&lt;String &gt;  listeners|List&lt;String &gt;  adminListeners"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnectors@POLYN229585 the MagicNumber/String  'Added connector for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnectors@POLYN229585 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnectors@POLYN229585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnectors@POLYN229585 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnectors@POLYN229585 the MagicNumber/String  'Added admin connector for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method createConnector arguments String  listener"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN230841 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method createConnector arguments String  listener|boolean  isAdmin"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  'Listener doesn't have the right format (protocol://hostname:port).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  'Listener protocol must be either \'%s\' or \'%s\'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  '%s_%s%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.runtime.rest.RestServer.createConnector@POLYN231042 the MagicNumber/String  '%s_%s%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  'Initializing REST server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  'Unable to initialize REST server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  'REST server listening at ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  ', advertising URL ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeServer@POLYN233538 the MagicNumber/String  'REST admin endpoints at ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method initializeResources arguments Herder  herder"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Initializing REST resources' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Adding admin resources to main listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Adding admin resources to admin listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Skipping adding admin resources' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '/*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '/*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '@' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'cross-origin' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  '/*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  ' %{ms}T' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Unable to initialize REST resources' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Starting admin context' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'Unable to initialize Admin REST resources' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.connect.runtime.rest.RestServer.initializeResources@POLYN234507 the MagicNumber/String  'REST resources initialized; server is started and ready to handle requests' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00292] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.connect.runtime.rest.RestServer.stop@POLYN240643 the MagicNumber/String  'Stopping REST server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.connect.runtime.rest.RestServer.stop@POLYN240643 the MagicNumber/String  'Error while invoking close on ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.connect.runtime.rest.RestServer.stop@POLYN240643 the MagicNumber/String  'Unable to stop REST server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.connect.runtime.rest.RestServer.stop@POLYN240643 the MagicNumber/String  'REST server stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00317] The same method call serverConnector.getHost() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.rest.RestServer.advertisedUrl@POLYN241679 the MagicNumber/String  'Advertised URI: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00336] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  'No admin connector found for listeners {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.runtime.rest.RestServer.adminUrl@POLYN243335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.connect.runtime.rest.RestServer.determineAdvertisedProtocol@POLYN244534 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.connect.runtime.rest.RestServer.determineAdvertisedProtocol@POLYN244534 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.connect.runtime.rest.RestServer.determineAdvertisedProtocol@POLYN244534 the MagicNumber/String  '%s://' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.connect.runtime.rest.RestServer.determineAdvertisedProtocol@POLYN244534 the MagicNumber/String  '%s://' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#379"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00379] For method findConnector arguments String  protocol"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00388] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.connect.runtime.rest.RestServer.findConnector@POLYN245798 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.connect.runtime.rest.RestServer.findConnector@POLYN245798 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#394"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00394] For method registerRestExtensions arguments Herder  herder|ResourceConfig  resourceConfig"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#394"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00394] The argument herder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.connect.runtime.rest.RestServer.registerRestExtensions@POLYN246286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#423"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00423] For method configureHttpResponsHeaderFilter arguments ServletContextHandler  context"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#423"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00423] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.connect.runtime.rest.RestServer.configureHttpResponsHeaderFilter@POLYN247498 the MagicNumber/String  'headerConfig' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.connect.runtime.rest.RestServer.configureHttpResponsHeaderFilter@POLYN247498 the MagicNumber/String  '/*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/RestServer.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00111] Public method createConnector is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
